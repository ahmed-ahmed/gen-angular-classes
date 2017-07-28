'use strict';
import app from '../../modules.js';
import template from './<<kebabCase name>>.html';

class <<capCase name>>Controller{
    'ngInject';

    $onInit(){
    };
}

const component = {
    bindings: {
    },
    controller: <<capCase name>>Controller,
    template
};

app.component('<<kebabCase name>>', component);

