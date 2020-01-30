<?php
    namespace app\Controllers;

    class UserController extends Controllers {
        function selectUsers($request, $response){
            $message = $this->UserModel->selectUsers();
            return json_encode($message);
        }

        function insertUsers($request, $response){
            $user = $request->getParsedBody();
            //var_dump($employee);die();
            $message = $this->UserModel->insertUsers($user);
            return json_encode($message);
        }

        function updateUsers($request, $response){
            $user = $request->getParsedBody();
            $message = $this->UserModel->updateUsers($user);
            return json_encode($message);
        }

        function getUserbyId($request, $response){
            $userNumber = $request->getAttribute('userNumber');
            $message = $this->UserModel->getByIdUser($userNumber);
            return json_encode($message);
        }

        function login($request, $response){
            $login = $request->getParsedBody();
            $message = $this->UserModel->login($login);
            return json_encode($message);
        }
    }
?>