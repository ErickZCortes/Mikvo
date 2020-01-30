<?php
    $app->get('/profiles', 'ProfileController:selectRouters');
    $app->post('/profiles', 'ProfileController:insertRouters');
    $app->put('/profiles', 'ProfileController:updateRouters');
    $app->delete('/profiles', 'ProfileController:deleteRouters');
?>