<?php
    namespace app\Models;  
    class VoucherModel extends Models{
        public function selectProfiles(){

            $query = $this->db->pdo->prepare('SELECT * FROM profiles');

            if(!$query->execute()){
                return array(
                    'sucess' => false,
                    'description' => $query->errorInfo()
                );
            }else{
                $result = $query -> fetchAll(\ PDO::FETCH_ASSOC);
                return array(
                    'sucess' => true,
                    'description' => 'The profiles were found',
                    'profiles' => $result
                );
            }
    
            return array(
                'sucess' => true,
                'description' => 'The profiles were found',
                'profiles' => $result
            );
        }

        public function getByIdProfile($idprofile){
            $result = $this->db->select('profile',[
                'id_profile',
                'iduser_profile',
                'addpool_profile',
                'name_profile',
                'cost_profile',
                'formatc_profile',
                'port_profile',
                'idtime_profile',
                'dbyte_profile',
                'sbyte_profile',
                'vdescarga_profile',
                'vsubida_profile'
            ],[
                "id_profile" => $idprofile
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
            'description' => 'The profile were found',
            'profiles' => $result
        );
        }

        public function insertProfiles($profile){
            $result = $this->db->pdo->prepare(
                'INSERT INTO profiles(
                    id_profile,
                    addpool_profile,
                    name_profile,
                    cost_profile,
                    formatc_profile,
                    port_profile,
                    idtime_profile,
                    dbyte_profile,
                    sbyte_profile,
                    vdescarga_profile,
                    vsubida_profile)
                    VALUES ( 
                    :id_profile,
                    :addpool_profile,
                    :name_profile,
                    :cost_profile,
                    :formatc_profile,
                    :port_profile,
                    :idtime_profile,
                    :dbyte_profile,
                    :sbyte_profile,
                    :vdescarga_profile,
                    :vsubida_profile
                    )'
            );
            $result->bindParam(':id_profile', $profile['id_profile'], \PDO::PARAM_INT, 20);
            $result->bindParam(':addpool_profile', $profile['addpool_profile'], \PDO::PARAM_STR, 30);
            $result->bindParam(':name_profile', $profile['name_profile'], \PDO::PARAM_STR, 30);
            $result->bindParam(':cost_profile', $profile['cost_profile'], \PDO::PARAM_INT, 5);
            $result->bindParam(':formatc_profile', $profile['formatc_profile'], \PDO::PARAM_STR, 5);
            $result->bindParam(':port_profile', $profile['port_profile'], \PDO::PARAM_INT, 10);
            $result->bindParam(':idtime_profile', $profile['idtime_profile'], \PDO::PARAM_INT, 20);
            $result->bindParam(':dbyte_profile', $profile['dbyte_profile'], \PDO::PARAM_STR, 3);
            $result->bindParam(':sbyte_profile', $profile['sbyte_profile'], \PDO::PARAM_STR, 3);
            $result->bindParam(':vdescarga_profile', $profile['vdescarga_profile'], \PDO::PARAM_INT, 5);
            $result->bindParam(':vsubida_profile', $profile['vsubida_profile'], \PDO::PARAM_INT, 5);

            if(!$result->execute()){
                return array(
                    'sucess' => false,
                    'description' => $result->errorInfo()
                );
            }else{
                return array(
                    'sucess' => true,
                    'description' => 'The profile was inserted'
                );
            }
        }

        public function updateVouchers($profile){
            $profile=[
                'id_profile'=> $profile['id_profile'],
                'addpool_profile' => $profile['addpool_profile'],
                'name_profile' => $profile['name_profile'],
                'cost_profile' => $profile['cost_profile'],
                'formatc_profile' => $profile['formatc_profile'],
                'port_profile' => $profile['port_profile'],
                'idtime_profile' => $profile['idtime_profile'],
                'dbyte_profile' => $profile['dbyte_profile'],
                'sbyte_profile' => $profile['sbyte_profile'],
                'vdescarga_profile' => $profile['vdescarga_profile'],
                'vsubida_profile' => $profile['vsubida_profile']
            ];
            $result= $this->db->pdo->prepare(
                'UPDATE profiles SET 
                addpool_profile =:addpool_profile,
                name_profile=:name_profile,
                cost_profile=:cost_profile,
                formatc_profile=:formatc_profile,
                port_profile=:port_profile,
                idtime_profile=:idtime_profile
                dbyte_profile=:dbyte_profile,
                sbyte_profile=:sbyte_profile
                vdescarga_profile=:vdescarga_profile,
                vsubida_profile=:vsubida_profile
                WHERE
                id_profile = :id_profile'
            );
    
            if(!$result->execute($profile)){
                return array(
                    'sucess' => false,
                    'description' => $result->errorInfo()   
                );
            }else{
                return array(
                    'success'=> true,
                    'description'=>'the profile was updated'
                );
            }
        }

        public function deleteRouters($profile){
            $profile=[
                'id_profile'=> $profile['id_profile']
            ];
            $result= $this->db->pdo->prepare(
                'DELETE FROM vouchers 
                WHERE profiles.id_profile = :id_profile'
            );
    
            if(!$result->execute($router)){
                return array(
                    'sucess' => false,
                    'description' => $result->errorInfo()   
                );
            }else{
                return array(
                    'success'=> true,
                    'description'=>'the profile was removed'
                );
            }
        }
    
    }
?>