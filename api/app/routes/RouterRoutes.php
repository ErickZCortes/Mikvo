<?php
    $app->get('/routers', 'RouterController:selectRouters');
    $app->post('/routers', 'RouterController:insertRouters');
    $app->put('/routers', 'RouterController:updateRouters');
    $app->delete('/routers', 'RouterController:deleteRouters');
?>