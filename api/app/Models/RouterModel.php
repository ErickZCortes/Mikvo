<?php
    namespace app\Models;  
    class RouterModel extends Models{
        public function selectRouters(){

            $query = $this->db->pdo->prepare('SELECT * FROM routerboards');

            if(!$query->execute()){
                return array(
                    'sucess' => false,
                    'description' => $query->errorInfo()
                );
            }else{
                $result = $query -> fetchAll(\ PDO::FETCH_ASSOC);
                return array(
                    'sucess' => true,
                    'description' => 'The routers were found',
                    'routers' => $result
                );
            }
    
            return array(
                'sucess' => true,
                'description' => 'The routers were found',
                'routers' => $result
            );
        }
        public function insertRouters($router){
            $result = $this->db->pdo->prepare(
                'INSERT INTO routerboards(
                    id_router,
                    iduser_router,
                    model_router,
                    router_description,
                    ip_router,
                    user_router,
                    password_router)
                    VALUES ( 
                    :id_router,
                    :iduser_router,
                    :model_router,
                    :router_description,
                    :ip_router,
                    :user_router,
                    :password_router
                    )'
            );
            $result->bindParam(':id_router', $router['id_router'], \PDO::PARAM_INT, 20);
            $result->bindParam(':iduser_router', $router['iduser_router'], \PDO::PARAM_INT, 20);
            $result->bindParam(':model_router', $router['model_router'], \PDO::PARAM_STR, 30);
            $result->bindParam(':router_description', $router['router_description'], \PDO::PARAM_STR, 100);
            $result->bindParam(':ip_router', $router['ip_router'], \PDO::PARAM_STR, 15);
            $result->bindParam(':user_router', $router['user_router'], \PDO::PARAM_STR, 30);
            $result->bindParam(':password_router', $router['password_router'], \PDO::PARAM_STR, 40);
            
            if(!$result->execute()){
                return array(
                    'sucess' => false,
                    'description' => $result->errorInfo()
                );
            }else{
                return array(
                    'sucess' => true,
                    'description' => 'The router was inserted'
                );
            }
        }

        public function updateRouters($router){
            $router=[
                'id_router'=> $router['id_router'],
                'iduser_router'=> $router['iduser_router'],
                'model_router' => $router['model_router'],
                'router_description' => $router['router_description'],
                'ip_router' => $router['ip_router'],
                'user_router' => $router['user_router'],
                'password_router' => $router['password_router']
            ];
            $result= $this->db->pdo->prepare(
                'UPDATE routerboards SET 
                iduser_router =:iduser_router,
                model_router =:model_router,
                router_description=:router_description,
                ip_router=:ip_router,
                user_router=:user_router,
                password_router=:password_router
                WHERE
                id_router = :id_router'
            );
    
            if(!$result->execute($router)){
                return array(
                    'sucess' => false,
                    'description' => $result->errorInfo()   
                );
            }else{
                return array(
                    'success'=> true,
                    'description'=>'the router was updated'
                );
            }
        }

        public function deleteRouters($router){
            $router=[
                'id_router'=> $router['id_router']
            ];
            $result= $this->db->pdo->prepare(
                'DELETE FROM routerboards 
                WHERE routerboards.id_router = :id_router'
            );
    
            if(!$result->execute($router)){
                return array(
                    'sucess' => false,
                    'description' => $result->errorInfo()   
                );
            }else{
                return array(
                    'success'=> true,
                    'description'=>'the router was removed'
                );
            }
        }
    
    }
?>