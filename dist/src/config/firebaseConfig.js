"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.firebaseConfig = void 0;
// Import the functions you need from the SDKs you need
var app_1 = __importDefault(require("firebase/app"));
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
exports.firebaseConfig = {
    apiKey: "AIzaSyCLIUUsiuHiJZfeaSD7-I-K8kJIPvNjpoo",
    authDomain: "nodeapp-67514.firebaseapp.com",
    databaseURL: "https://nodeapp-67514-default-rtdb.firebaseio.com",
    projectId: "nodeapp-67514",
    storageBucket: "nodeapp-67514.appspot.com",
    messagingSenderId: "403649805884",
    appId: "1:403649805884:web:1700709f1b6bb61db00d39",
};
// Initialize Firebase
//@ts-ignore
exports.app = (0, app_1.default)(exports.firebaseConfig);
