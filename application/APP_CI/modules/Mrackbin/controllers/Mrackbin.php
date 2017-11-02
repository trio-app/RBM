<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class Mrackbin extends MX_Controller{
    
    function __construct() {
        parent::__construct();
    }
    
    public function index(){
        $this->load->view('V_mrackbin');
    }
    
    public function read(){
        $this->load->model('R_mrackbin');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->R_mrackbin->load_default($start,$limit,$filter));
    }   
    
    public function create(){
        $JSONdata = file_get_contents("php://input"); 
        $this->load->model('C_mrackbin');
        $this->C_mrackbin->insertDT(json_decode($JSONdata,true));        
    }
    
    public function delete(){
        $JSONdata = file_get_contents("php://input"); 
        $this->load->model('D_mrackbin');
        $this->D_mrackbin->deleteDT(json_decode($JSONdata,true));  
    }
    
    public function update(){
        $JSONdata = file_get_contents("php://input"); 
        $this->load->model('U_mrackbin');
        $this->U_mrackbin->updateDT(json_decode($JSONdata,true));  
    }
    
    public function cbolist(){
        header('Content-type: application/json');
        $this->load->model('R_mrackbin');
        print_r($this->R_mrackbin->cbolist());  
    }
}

