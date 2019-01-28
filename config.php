<?php
session_start();

/*  PROD  */
/*$globals["BASE_URL"] = "http://18.207.215.79/";*/

/*  DEV  */
/*$globals["BASE_URL"] = "http://18.207.215.79/dev/";*/
$BASE_URL = "";

/* turn on error reporting */

error_reporting(E_ALL);
ini_set('display_errors', 1);

/* end error reporting */


/* included directory paths */

/*$globals["INCL_DIR"] = "incl/";
$globals["IMG_DIR"] = "img/";
$globals["JS_DIR"] = "js/";
$globals["CSS_DIR"] = "css/";*/

$INCL_DIR = $BASE_URL."incl/";
$IMG_DIR = $BASE_URL."img/";
$JS_DIR = $BASE_URL."js/";
$CSS_DIR = $BASE_URL."css/";

?>