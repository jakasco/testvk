<?php
/**
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link          https://cakephp.org CakePHP(tm) Project
 * @since         0.10.0
 * @license       https://opensource.org/licenses/mit-license.php MIT License
 */
use Cake\Cache\Cache;
use Cake\Core\Configure;
use Cake\Core\Plugin;
use Cake\Datasource\ConnectionManager;
use Cake\Error\Debugger;
use Cake\Http\Exception\NotFoundException;

$this->layout = false; //pages palkki

if (!Configure::read('debug')) :
    throw new NotFoundException(
        'Please replace src/Template/Pages/home.ctp with your own version or re-enable debug mode.'
    );
endif;

$cakeDescription = 'CakePHP: the rapid development PHP framework';
?>


<!DOCTYPE html>
<html>
<head>
<link href="./webroot/css/style.css" rel="stylesheet">
</head>
<body>

asd2

<div id="header">  asd  </div>

<div id="ostoskori">
  <ul id="ostoskoriUl">
  </ul>
</div>

<div id="tuoteLista"></div>

<button id="add">Laita ostoskoriin</button>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script type="text/javascript" src="./webroot/js/generateGrid.js"></script>
<script type="text/javascript" src="./webroot/js/ostosKori.js"></script>
<?php

$connection = ConnectionManager::get('default');
$results = $connection->execute('SELECT * FROM tuote')->fetchAll('assoc');
$key = array_search('tv', $results);
//echo json_encode($results);
//echo "<script>console.log('" . json_encode($results) . "');</script>";

echo '<script type="text/javascript">',
     'generate(' . json_encode($results) . ');',
     '</script>'
;
/*
$connection->insert('ostoskori', [
    'tuoteId' => '2',
    ]);

*/


?>

<!-- javascript -->


</body>
</html>
