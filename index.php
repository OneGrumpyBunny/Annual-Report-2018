<?php session_start();

/* turn on error reporting */

error_reporting(E_ALL);
ini_set('display_errors', 1);

/* end error reporting */

include 'config.php';

include $globals["INCL_DIR"].'header.php';
include 'content.php';
include $globals["INCL_DIR"].'footer.php';
	
?>