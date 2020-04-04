<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( !function_exists( 'carousel_block_block_assets' ) ) { 
	/**
	 * Enqueue Gutenberg block assets for both frontend + backend.
	 *
	 * @uses {wp-editor} for WP editor styles.
	 * @since 1.0.0
	 */
	function carousel_block_block_assets() { // phpcs:ignore
		// Styles
		wp_enqueue_style(
			'carousel_block-cgb-style', 
			plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), 
			array( 'wp-editor' )
		);
	}
	
	// Hook: Frontend assets.
	add_action( 'enqueue_block_assets', 'carousel_block_block_assets' );
}

if ( !function_exists( 'carousel_block_editor_assets' ) ) { 
	/**
	 * Enqueue Gutenberg block assets for backend editor.
	 *
	 * @uses {wp-blocks} for block type registration & related functions.
	 * @uses {wp-element} for WP Element abstraction — structure of blocks.
	 * @uses {wp-i18n} to internationalize the block's text.
	 * @uses {wp-editor} for WP editor styles.
	 * @since 1.0.0
	 */
	function carousel_block_editor_assets() { // phpcs:ignore
		// Scripts
		wp_enqueue_script(
			'carousel_block-cgb-block-js', 
			plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), 
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), 
			true 
		);
	
		// Styles
		wp_enqueue_style(
			'carousel_block-cgb-block-editor', 
			plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), 
			array( 'wp-edit-blocks' ) 
		);
	}

	add_action( 'enqueue_block_editor_assets', 'carousel_block_editor_assets' );
}

if ( !function_exists( 'carousel_block_assets' ) ) { 
	/**
	 * Enqueue assets for frontend
	 *
	 * @since 1.0.0
	 */
	function carousel_block_assets() {
		// Scripts
		wp_enqueue_script(
			'cb-slick-js',
			plugins_url( '/dist/assets/slick/slick.min.js', dirname( __FILE__ ) ),
			array( 'jquery' )
		);
		wp_enqueue_script(
			'cb-js', 
			plugins_url( '/dist/assets/carousel-block.js', dirname( __FILE__ ) ), 
			array( 'jquery' )
		);
		// Styles
		wp_enqueue_style(
			'slick-theme', 
			plugins_url( 'dist/assets/slick/slick-theme.min.css', dirname( __FILE__ ) ) 
		);
	}
	add_action( 'wp_enqueue_scripts', 'carousel_block_assets' );
}