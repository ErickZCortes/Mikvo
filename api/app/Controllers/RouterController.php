<?php
    namespace app\Controllers;

    class RouterController extends Controllers {
        function selectRouters($request, $response){
            $message = $this->RouterModel->selectRouters();
            return json_encode($message);
        }

        function insertRouters($request, $response){
            $router = $request->getParsedBody();
            $message = $this->RouterModel->insertRouters($router);
            return json_encode($message);
        }
        
        function updateRouters($request, $response){
            $router = $request->getParsedBody();
            $message = $this->RouterModel->updateRouters($router);
            return json_encode($message);
        }
        function deleteRouters($request, $response){
            $router = $request->getParsedBody();
            $message = $this->RouterModel->deleteRouters($router);
            return json_encode($message);
        }
    }
?>