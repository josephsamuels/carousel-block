<?php
/**
 * Plugin Name: Carousel Slider Block
 * Plugin URI: https://wordpress.org/plugins/carousel-block
 * Description: A responsive and customizable carousel block for Gutenberg. 
 * Author URI: http://virgiliudiaconu.com/
 * Version: 1.0.1
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'dist/init.php';
