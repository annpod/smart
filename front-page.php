<?php	
/**
Template Name:Business Home Page 
* @Theme Name	:	smart
* @file         :	front-page.php
* @package      :	smart
* @author       :	smart
* @license      :	license.txt
* @filesource   :	wp-content/themes/twentythirteen/front-rambo.php
*/ 

	get_header();
		
	/****** get index service  ********/
	get_template_part('index', 'service') ;
	
	/****** get footer section *********/
	get_footer(); 
	
?>