<?php
    namespace app\Models;  
    class VoucherModel extends Models{
        public function selectVouchers(){

            $query = $this->db->pdo->prepare('SELECT * FROM vouchers');

            if(!$query->execute()){
                return array(
                    'sucess' => false,
                    'description' => $query->errorInfo()
                );
            }else{
                $result = $query -> fetchAll(\ PDO::FETCH_ASSOC);
                return array(
                    'sucess' => true,
                    'description' => 'The vouchers were found',
                    'vouchers' => $result
                );
            }
    
            return array(
                'sucess' => true,
                'description' => 'The vouchers were found',
                'vouchers' => $result
            );
        }
        public function insertVouchers($voucher){
            $result = $this->db->pdo->prepare(
                'INSERT INTO vouchers(
                    id_voucher,
                    dnsname_voucher,
                    nusers_voucher,
                    server_voucher,
                    prefix_voucher,
                    idprofile_voucher,
                    nprofile_voucher)
                    VALUES ( 
                    :id_voucher,
                    :dnsname_voucher,
                    :nusers_voucher,
                    :server_voucher,
                    :prefix_voucher,
                    :idprofile_voucher,
                    :nprofile_voucher
                    )'
            );
            $result->bindParam(':id_voucher', $voucher['id_voucher'], \PDO::PARAM_INT, 20);
            $result->bindParam(':dnsname_voucher', $voucher['dnsname_voucher'], \PDO::PARAM_STR, 25);
            $result->bindParam(':nusers_voucher', $voucher['nusers_voucher'], \PDO::PARAM_INT, 30);
            $result->bindParam(':server_voucher', $voucher['server_voucher'], \PDO::PARAM_STR, 25);
            $result->bindParam(':prefix_voucher', $voucher['prefix_voucher'], \PDO::PARAM_STR, 30);
            $result->bindParam(':idprofile_voucher', $voucher['idprofile_voucher'], \PDO::PARAM_INT, 20);
            $result->bindParam(':nprofile_voucher', $voucher['nprofile_voucher'], \PDO::PARAM_STR, 30);

            if(!$result->execute()){
                return array(
                    'sucess' => false,
                    'description' => $result->errorInfo()
                );
            }else{
                return array(
                    'sucess' => true,
                    'description' => 'The voucher was inserted'
                );
            }
        }

        public function updateVouchers($voucher){
            $voucher=[
                'id_voucher'=> $voucher['id_voucher'],
                'dnsname_voucher' => $voucher['dnsname_voucher'],
                'nusers_voucher' => $voucher['nusers_voucher'],
                'server_voucher' => $voucher['server_voucher'],
                'prefix_voucher' => $voucher['prefix_voucher'],
                'idprofile_voucher' => $voucher['idprofile_voucher'],
                'nprofile_voucher' => $voucher['nprofile_voucher']
            ];
            $result= $this->db->pdo->prepare(
                'UPDATE vouchers SET 
                dnsname_voucher =:dnsname_voucher,
                nusers_voucher=:nusers_voucher,
                server_voucher=:server_voucher,
                prefix_voucher=:prefix_voucher,
                idprofile_voucher=:idprofile_voucher,
                nprofile_voucher=:nprofile_voucher
                WHERE
                id_voucher = :id_voucher'
            );
    
            if(!$result->execute($voucher)){
                return array(
                    'sucess' => false,
                    'description' => $result->errorInfo()   
                );
            }else{
                return array(
                    'success'=> true,
                    'description'=>'the voucher was updated'
                );
            }
        }

        public function deleteRouters($voucher){
            $voucher=[
                'id_voucher'=> $voucher['id_voucher']
            ];
            $result= $this->db->pdo->prepare(
                'DELETE FROM vouchers 
                WHERE vouchers.id_voucher = :id_voucher'
            );
    
            if(!$result->execute($router)){
                return array(
                    'sucess' => false,
                    'description' => $result->errorInfo()   
                );
            }else{
                return array(
                    'success'=> true,
                    'description'=>'the voucher was removed'
                );
            }
        }
    
    }
?>