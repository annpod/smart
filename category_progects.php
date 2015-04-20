<?php
/**
 * @Theme Name	:	smart
 * @file         :	category_projects.php
 * @package      :	smart
 * @author       :	smart
 * @license      :	license.txt
 * @filesource   :	wp-content/themes/twentythirteen/category_projects.php
 */
//Template Name:Category_projects
$url = get_permalink( $post->post_parent );
$url_hash = $post->ID;
wp_redirect( $url . '#cat'. $url_hash);
exit; ?>
