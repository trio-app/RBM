<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class Toutbound extends MX_Controller{
    
    function __construct() {
        parent::__construct();
    }
    
    public function index(){
        $this->load->view('V_toutbound');
    }
    
    public function read(){
        $this->load->model('R_muom');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->R_muom->load_default($start,$limit,$filter));
    }     
}

