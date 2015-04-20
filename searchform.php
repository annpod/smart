<?php 
/**
* @Theme Name	:	smart
* @file         :	search.php
* @package      :	smart
* @author       :	webriti
* @license      :	license.txt
* @filesource   :	wp-content/themes/twentythirteen/search.php
*/
 ?>
<form method="get" id="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>">
		
    <input type="text"   name="s" id="s" placeholder="Search for content..." />
    <input type="submit" class="search-btn" name="submit" value="" />

</form>