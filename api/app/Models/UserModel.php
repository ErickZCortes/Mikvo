<?php
    namespace app\Models;  
    class UserModel extends Models{
        public function selectUsers(){

            $query = $this->db->pdo->prepare('SELECT * FROM users');

            if(!$query->execute()){
                return array(
                    'sucess' => false,
                    'description' => $query->errorInfo()
                );
            }else{
                $result = $query -> fetchAll(\ PDO::FETCH_ASSOC);
                return array(
                    'sucess' => true,
                    'description' => 'The users were found',
                    'users' => $result
                );
            }
    
            return array(
                'sucess' => true,
                'description' => 'The users were found',
                'users' => $result
            );
        }
        public function insertUsers($user){
            $result = $this->db->pdo->prepare(
                'INSERT INTO users (
                    id_user,
                    fullname_user,
                    user_name,
                    mail_user,
                    password_user,
                    token_user,
                    img_user,
                    access_user)
                    VALUES ( 
                    :id_user,
                    :fullname_user,
                    :user_name,
                    :mail_user,
                    :password_user,
                    :token_user,
                    :img_user,
                    :access_user
                    )'
            );
            $pass = md5($user['password_user']);
            $result->bindParam(':id_user', $user['id_user'], \PDO::PARAM_INT, 20);
            $result->bindParam(':fullname_user', $user['fullname_user'], \PDO::PARAM_STR, 40);
            $result->bindParam(':user_name', $user['user_name'], \PDO::PARAM_STR, 15);
            $result->bindParam(':mail_user', $user['mail_user'], \PDO::PARAM_STR, 40);
            $result->bindParam(':password_user',$pass, \PDO::PARAM_STR, 100);
            $result->bindParam(':token_user', $user['token_user'], \PDO::PARAM_STR, 100);
            $result->bindParam(':img_user', $user['img_user'], \PDO::PARAM_STR, 200);
            $result->bindParam(':access_user', $user['access_user'], \PDO::PARAM_STR,200);
            
            if(!$result->execute()){
                return array(
                    'sucess' => false,
                    'description' => $result->errorInfo()
                
                );
            }else{
                return array(
                    'sucess' => true,
                    'description' => 'The user was inserted'
                
                );
            }
        }

        public function updateUsers($user){
            $users=[
                'id_user'=> $user['id_user'],
                'fullname_user' => $user['fullname_user'],
                'user_name' => $user['user_name'],
                'mail_user' => $user['mail_user'],
                'password_user' => $user['password_user'],
                'token_user' => $user['token_user'],
                'img_user' => $user['img_user'],
                'access_user' => $user['access_user']
            ];
            $result= $this->db->pdo->prepare(
                'UPDATE users SET 
                fullname_user=:fullname_user,
                user_name =:user_name,
                mail_user=:mail_user,
                password_user=:	password_user,
                token_user=:token_user,
                img_user=:img_user,
                access_user=:access_user
                WHERE
                id_user = :id_user'
            );
    
            if(!$result->execute($user)){
                return array(
                    'sucess' => false,
                    'description' => $result->errorInfo()   
                );
            }else{
                return array(
                    'success'=> true,
                    'description'=>'the user was updated'
                );
            }
        }

        public function login($login){
            $email = $login['mail_user'];
            $pass = md5($login['password_user']);
            $sqlE = $this->db->pdo->prepare('SELECT * FROM users WHERE mail_user = :email');
            $sqlE->bindParam(':email', $email, \PDO::PARAM_STR);
            $sqlE->execute();
            $result = $sqlE->fetchAll(\PDO::FETCH_ASSOC);
            if(empty($result)){
                return array(
                    'error' => true,
                    'description' => 'Email incorrect'
                );
            }
            $sqlP = $this->db->pdo->prepare('SELECT * FROM users WHERE password_user = :password');
            $sqlP->bindParam(':password', $pass, \PDO::PARAM_STR);
            $sqlP->execute();
            $result = $sqlP->fetchAll(\PDO::FETCH_ASSOC);
            if(empty($result)){
                return array(
                    'error' => true,
                    'description' => 'Password incorrect'
                );
            }
            $token = $this->JWTService->encode($email);
            return array(
                'success' => true,
                'description' => 'Correct access, Welcome',
                'token' => $token,
                session_start()
            );
        }

        public function logout(){
            session_destroy();
        }
    }
?>