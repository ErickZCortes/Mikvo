<?php
    namespace app\Services;
    class JWTService extends Services {
        
        public function encode($caracter){
            $message = $this->jwt->encode($caracter, $this->settings['jwt']['key']);
            return $message;
        }

        public function decode($caracter){
            $message = $this->jwt->decode($caracter, $this->settings['jwt']['key'],array($this->settings['jwt']['algorithms']));
            return $message;
        }
    }
?>