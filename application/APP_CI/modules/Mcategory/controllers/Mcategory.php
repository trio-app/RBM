<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class Mcategory extends MX_Controller{
    
    function __construct() {
        parent::__construct();
    }
    
    public function index(){
        $this->load->view('V_mcategory');
    }
    
    public function read(){
        $this->load->model('R_mcategory');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        echo $start;
        print_r( $this->R_mcategory->load_default($start,$limit,$filter));
    }   
    
    public function create(){
        $JSONdata = file_get_contents("php://input"); 
        $this->load->model('C_mcategory');
        $this->C_mcategory->insertDT(json_decode($JSONdata,true));        
    }
    
    public function delete(){
        $JSONdata = file_get_contents("php://input"); 
        $this->load->model('D_mcategory');
        $this->D_mcategory->deleteDT(json_decode($JSONdata,true));  
    }
    
    public function update(){
        $JSONdata = file_get_contents("php://input"); 
        $this->load->model('U_mcategory');
        $this->U_mcategory->updateDT(json_decode($JSONdata,true));  
    }
}

