<?php
    namespace app\Controllers;
    class ProfileController extends Controllers {
        function selectProfiles($request, $response){
            $message = $this->ProfileModel->selectProfiles();
            return json_encode($message);
        }

        function getProfilebyId($request, $response){
            $idprofile = $request->getAttribute('id_profile');
            $message = $this->ProfileModel->getByIdProfile($idprofile);
            return json_encode($message);
        }

        function insertProfiles($request, $response){
            $profile = $request->getParsedBody();
            $message = $this->ProfileModel->insertProfiles($profile);
            return json_encode($message);
        }
        
        function updateProfiles($request, $response){
            $profile = $request->getParsedBody();
            $message = $this->ProfileModel->updateProfiles($profile);
            return json_encode($message);
        }
        function deleteProfiles($request, $response){
            $profile = $request->getParsedBody();
            $message = $this->ProfileModel->deleteProfiles($profile);
            return json_encode($message);
        }
    }
?>