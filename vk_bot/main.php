<?php

use VK\CallbackApi\LongPoll\VKCallbackApiLongPollExecutor;
use VK\CallbackApi\VKCallbackApiHandler;
use VK\Client\Enums\VKLanguage;
use VK\Client\VKApiClient;

require 'vendor/autoload.php';

function console_log($msg){
    echo $msg . PHP_EOL;
}

class CallbackApiCustomHandler extends VKCallbackApiHandler{
    private $gameState = [];
    private $cards = [];
    private $unsedCards = [];

    function __construct(){
        $descs = explode("\n", file_get_contents('./img/words.txt'));
        $descsRet = [];

        foreach($descs as $k => $v){
            $cols = explode("\t", $v);
            $descsRet[$cols[0]] = explode(' ', $cols[1]);
        }

        foreach(scandir('./img/') as $k => $v){
            if($v == '.' || $v == '..' || !preg_match('/\.jpg$/', $v)) continue;

            $this->cards[$v] = ['url' => './img/' . $v, 'id' => $v, 'desc' => $descsRet[$v] ?? 'undefined'];
            $this->unsedCards[] = $v;
        }
    }

    public function messageNew($group_id, $secret, $object) {
//        console_log(json_encode($object));
        $send = $this->messageLogic($object);

        if($send !== null){
            if(isset($object['message']['peer_id'])){
                if(is_array($send)) {
                    $this->sendMessage($object['message']['peer_id'], $send[0], $send[1]);
                }else{
                    $this->sendMessage($object['message']['peer_id'], $send);
                }
            }else{
                console_log('не возможно отправить сообщение: ' . json_encode($object));
            }
        }
    }

    private function messageLogic($obj){
        $ls = explode(' ', $obj['message']['text']);

        switch(mb_strtolower($ls[0])){
            case 'старт':
                $ks = array_rand($this->unsedCards, 5);
                $wordsArr = [];

                $ret = [];

                foreach ($ks as $v) {
                    $ret[] = $this->cards[$this->unsedCards[$v]]['url'];
                    $descs = $this->cards[$this->unsedCards[$v]]['desc'];
                    $fill_keys = [];

                    for($i = 0; $i < count($descs); $i++){
                        $fill_keys[] = $v . '_' . $i;
                    }

                    $wordsArr[] = array_combine($fill_keys, $descs);
                }

                $remaindWords = array_diff(...$wordsArr);

                $this->unsedCards = array_diff($this->unsedCards, array_fill_keys($ks, 0));

                $this->sendMessage($obj['message']['peer_id'], '', $ret);
//
//                console_log(json_encode($remaindWords));
//                console_log(json_encode($wordsArr));
                $wordKey = array_rand($remaindWords, 1);
                $word = $remaindWords[$wordKey] ?? array_pop($wordsArr[0]) . '.';
                preg_match('/.+_(.+)/', $wordKey, $matchKey);


                if(!isset($this->gameState[$obj['message']['peer_id']])){
                    $this->gameState[$obj['message']['peer_id']] = [
                        'curr_word' => $word,
                        'curr_answer' => $matchKey[1],
                        'balance' => 0,
                        'finish' => false,
                    ];
                }

                $this->gameState[$obj['message']['peer_id']]['curr_word'] = $word;
                $this->gameState[$obj['message']['peer_id']]['finish'] = false;
//                console_log(json_encode($this->gameState[$obj['message']['peer_id']]));
                return $word;

            case 'баланс':
                return 'Твой баланс: ' . ($this->gameState[$obj['message']['peer_id']]['balance'] ?? 0) . 'м';

            default:
                if($this->gameState[$obj['message']['peer_id']]['finish'] ?? true)
                    return 'Отправь слово "Старт"';

                if((($this->gameState[$obj['message']['peer_id']]['curr_answer'] + 1) ?? '') == $ls[0]){
                    $this->gameState[$obj['message']['peer_id']]['balance'] += 3;
                    $this->gameState[$obj['message']['peer_id']]['finish'] = true;
                    return 'Правильно, на твой баланс добавлено 3 монетки';
                }else {
                    $this->gameState[$obj['message']['peer_id']]['finish'] = true;
                    return 'Неправильно, не дам монетки';
                }
        }
    }

    private function sendMessage($peer_id, $msg, $attachments = null){
        global $vk, $token;

        $vk->messages()->send($token,['random_id' => 0, 'peer_id' => $peer_id, 'message' => $msg, 'attachment' => $this->uploadAttachments($peer_id, $attachments)]);
    }

    function uploadAttachments($id, $url){
        global $vk, $token;

        if(!is_array($url)) return null;
        if(!$url) return null;

        $return = [];

        foreach($url as $val){
//            if(strpos($val, "http://") !== 0 && strpos($val, "https://") !== 0){ return false; }

            $ask = $vk->photos()->getMessagesUploadServer($token, ['peer_id' => $id]);
            $ask = $vk->getRequest()->upload($ask['upload_url'], 'photo', $val);

            try{
                $ask = $vk->photos()->saveMessagesPhoto($token, $ask);
            }catch(Exception $e){
                return null;
            }

            $return[] = 'photo'.$ask[0]['owner_id'].'_'.$ask[0]['id'];
        }

        return implode(",",$return);
    }
}

global $vk, $token, $ground_id;

$vk = new VKApiClient('5.131', VKLanguage::RUSSIAN);
$token = 'f28489fa43a269282b10362ec5127ab6596c1303829f02114baf54502b4fb0d98845a839b682bf43d49cf';
$ground_id = 213726167;

$wait = 5;

$longApi = new VKCallbackApiLongPollExecutor($vk, $token, $ground_id, new CallbackApiCustomHandler(), $wait);

console_log('Bot started');

while(true){
    $longApi->listen();
}
