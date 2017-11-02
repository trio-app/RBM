<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class Mgroup extends MX_Controller{
    
    function __construct() {
        parent::__construct();
    }
    
    public function index(){
        $this->load->view('V_mgroup');
    }
    
    public function read(){
        $this->load->model('R_mgroup');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->R_mgroup->load_default($start,$limit,$filter));
    }   
    
    public function create(){
        $JSONdata = file_get_contents("php://input"); 
        $this->load->model('C_mgroup');
        $this->C_mgroup->insertDT(json_decode($JSONdata,true));        
    }
    
    public function delete(){
        $JSONdata = file_get_contents("php://input"); 
        $this->load->model('D_mgroup');
        $this->D_mgroup->deleteDT(json_decode($JSONdata,true));  
    }
    
    public function update(){
        $JSONdata = file_get_contents("php://input"); 
        $this->load->model('U_mgroup');
        $this->U_mgroup->updateDT(json_decode($JSONdata,true));  
    }
        
    public function cbolist(){
        header('Content-type: application/json');
        $this->load->model('R_mgroup');
        print_r($this->R_mgroup->cbolist());  
    }
}

