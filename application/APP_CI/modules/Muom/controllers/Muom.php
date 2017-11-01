<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class Muom extends MX_Controller{
    
    function __construct() {
        parent::__construct();
    }
    
    public function index(){
        $this->load->view('V_muom');
    }
    
    public function read(){
        $this->load->model('R_muom');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        echo $start;
        print_r( $this->R_muom->load_default($start,$limit,$filter));
    }   
    
    public function create(){
        $JSONdata = file_get_contents("php://input"); 
        $this->load->model('C_muom');
        $this->C_muom->insertDT(json_decode($JSONdata,true));        
    }
    
    public function delete(){
        $JSONdata = file_get_contents("php://input"); 
        $this->load->model('D_muom');
        $this->D_muom->deleteDT(json_decode($JSONdata,true));  
    }
    
    public function update(){
        $JSONdata = file_get_contents("php://input"); 
        $this->load->model('U_muom');
        $this->U_muom->updateDT(json_decode($JSONdata,true));  
    }
    
    public function cbolist(){
        header('Content-type: application/json');
        $this->load->model('R_muom');
        print_r($this->R_muom->cbolist());  
    }    
}

