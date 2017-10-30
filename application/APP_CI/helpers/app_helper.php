<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if ( ! function_exists('app_ver'))
{
    function app_ver()
    {
        // version format : 
        // major.minor[.build[.revision]]
        // or
        // major.minor[.maintenance[.build]]
        return "BETA Version 0.9.0.1";
    }   
}

if ( ! function_exists('app_title'))
{
    function app_title()
    {
        // Application Name / Title
        // Insert Below
        return "Warehouse RBM";
    }   
}

if ( ! function_exists('app_upgrade'))
{
    function app_upgrade()
    {
        // Application Upgrade Detail
        // Insert Below
        $detail = "Updated Modules :"
                . "<ul>"
                . "<li></li>"
                . "<li></li>"
                . "<li></li>"
                . "<li></li>"
                . "</ul>";
        
        
        return $detail;
    }   
}
