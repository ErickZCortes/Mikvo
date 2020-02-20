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

        public function getByIdUser($iduser){
            $result = $this->db->select('users',[
                'id_user',
                'fullname_user',
                'user_name',
                'email_user',
                'password_user',
                'token_user',
                'img_user',
                'access_user'
            ],[
                "id_user" => $iduser
            ]
        );

        if(!is_null($this->db->error()[1])){
            return array(
                'error' => true,
                'description' => $this->db->error()[2]
            );
        } else if (empty($result)){
            return array(
                'notFound' => true,
                'description' => 'The result is empty'
            );
        }
        return array(
            'success' => true,
            'description' => 'The user were found',
            'user' => $result
        );
        }

        public function registerUser($user){
            $result = $this->db->pdo->prepare(
                'INSERT INTO users (
                    id_user,
                    fullname_user,
                    user_name,
                    email_user,
                    password_user,
                    token_user,
                    img_user,
                    access_user)
                    VALUES ( 
                    :id_user,
                    :fullname_user,
                    :user_name,
                    :email_user,
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
            $result->bindParam(':email_user', $user['email_user'], \PDO::PARAM_STR, 40);
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
                'email_user' => $user['email_user'],
                'password_user' => $user['password_user'],
                'token_user' => $user['token_user'],
                'img_user' => $user['img_user'],
                'access_user' => $user['access_user']
            ];
            $result= $this->db->pdo->prepare(
                'UPDATE users SET 
                fullname_user=:fullname_user,
                user_name =:user_name,
                email_user=:email_user,
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
            
            $email = $login['email_user'];
            $pass = md5($login['password_user']);

            $sql = $this->db->pdo->prepare('SELECT * FROM users WHERE email_user = :email and password_user = :pass');
            $sql->bindParam(':email', $email, \PDO::PARAM_STR);
            $sql->bindParam(':pass', $pass, \PDO::PARAM_STR);
            $sql->execute();
            $result = $sql->fetchAll(\PDO::FETCH_ASSOC);
            if(empty($result)){
                return array(
                    'error' => true,
                    'description' => 'Password incorrect'
                );
            }else{
                $id_user = $result[0]['id_user'];
            }
            
            $iat = time(); // tiempo de la creación del token
           // $nbf = $iat + 10; //tiempo de inicio del token
            $exp = $iat + (60*60); // tiempo de expiracion del token 1h
            $token = array(
                "iat" => $iat,
           //     "nbf" => $nbf,
                "exp" => $exp,
                   "id_user" => $id_user,
                    "email_user" => $email,
                    "password_user" => $pass
                
            );
            $token = $this->JWTService->encode($token);
            
            return array(
                'success' => true,
                'description' => 'Correct access, Welcome',
                'token' => $token          
            ); 
        }

        public function decodeToken($token){
             $array = (array)$this->JWTService->decode($token);   
             
             return array(
                 'id_user'=> $array['id_user']
             );
             
             
        }

        /*public function getIdUser($array){
        //foreach($array as $usuario =>$id_user){          
        //return $id_user[]
        //}
        //return $array;
    }*/
}

    
?>