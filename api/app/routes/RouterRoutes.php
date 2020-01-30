<?php
    $app->get('/routers', 'RouterController:selectProfiles');
    $app->post('/routers', 'RouterController:insertProfiles');
    $app->put('/routers', 'RouterController:updateProfiles');
    $app->delete('/routers', 'RouterController:deleteProfiles');
?>