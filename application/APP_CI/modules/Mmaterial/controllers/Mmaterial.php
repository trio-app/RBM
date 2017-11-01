<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class Mmaterial extends MX_Controller{
    
    function __construct() {
        parent::__construct();
    }
    
    public function index(){
        $this->load->view('V_mmaterial');
    }
    
    public function read(){
        $this->load->model('R_mmaterial');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->R_mmaterial->load_default($start,$limit,$filter));
    }   
    
    public function create(){
        $JSONdata = file_get_contents("php://input"); 
        $this->load->model('C_mmaterial');
        $this->C_mmaterial->insertDT(json_decode($JSONdata,true));        
    }
    
    public function delete(){
        $JSONdata = file_get_contents("php://input"); 
        $this->load->model('D_mmaterial');
        $this->D_mmaterial->deleteDT(json_decode($JSONdata,true));  
    }
    
    public function update(){
        $JSONdata = file_get_contents("php://input"); 
        $this->load->model('U_mmaterial');
        $this->U_mmaterial->updateDT(json_decode($JSONdata,true));  
    }
    
    public function cbolist(){
        header('Content-type: application/json');
        $this->load->model('R_mmaterial');
        print_r($this->R_mmaterial->cbolist());  
    }    
}

