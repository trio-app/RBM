<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class Mlocation extends MX_Controller{
    
    function __construct() {
        parent::__construct();
    }
    
    public function index(){
        $this->load->view('V_mlocation');
    }
    
    public function read(){
        $this->load->model('R_mlocation');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->R_mlocation->load_default($start,$limit,$filter));
    }   
    
    public function create(){
        $JSONdata = file_get_contents("php://input"); 
        $this->load->model('C_mlocation');
        $this->C_mlocation->insertDT(json_decode($JSONdata,true));        
    }
    
    public function delete(){
        $JSONdata = file_get_contents("php://input"); 
        $this->load->model('D_mlocation');
        $this->D_mlocation->deleteDT(json_decode($JSONdata,true));  
    }
    
    public function update(){
        $JSONdata = file_get_contents("php://input"); 
        $this->load->model('U_mlocation');
        $this->U_mlocation->updateDT(json_decode($JSONdata,true));  
    }
    
    public function cbolist(){
        header('Content-type: application/json');
        $this->load->model('R_mlocation');
        print_r($this->R_mlocation->cbolist());  
    }
}

