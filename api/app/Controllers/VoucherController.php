<?php
    namespace app\Controllers;

    class VoucherController extends Controllers {
        function selectVouchers($request, $response){
            $message = $this->VoucherModel->selectVouchers();
            return json_encode($message);
        }

        function insertVouchers($request, $response){
            $voucher = $request->getParsedBody();
            $message = $this->VoucherModel->insertVouchers($voucher);
            return json_encode($message);
        }
        
        function updateVouchers($request, $response){
            $voucher = $request->getParsedBody();
            $message = $this->VoucherModel->updateVouchers($voucher);
            return json_encode($message);
        }
        function deleteVouchers($request, $response){
            $voucher = $request->getParsedBody();
            $message = $this->VoucherModel->deleteVouchers($voucher);
            return json_encode($message);
        }
    }
?>