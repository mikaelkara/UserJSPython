// ==UserScript==
// @name         GitHub Script Yöneticisi
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  GitHub sayfalarına özel scriptler eklemek ve yönetmek için araç.
// @author       Klavyelibey
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Script Yönetim Paneli Ekleme
    function addScriptManagerUI() {
        // Paneli Oluşturma
        const panel = document.createElement('div');
        panel.id = 'scriptManagerPanel';
        panel.style.position = 'fixed';
        panel.style.bottom = '10px';
        panel.style.right = '10px';
        panel.style.zIndex = '1000';
        panel.style.backgroundColor = 'white';
        panel.style.padding = '10px';
        panel.style.border = '1px solid #ddd';
        panel.style.borderRadius = '5px';

        // Script Ekleme Alanı
        const scriptInput = document.createElement('textarea');
        scriptInput.id = 'scriptInput';
        scriptInput.style.width = '300px';
        scriptInput.style.height = '100px';
        panel.appendChild(scriptInput);

        // Script Ekleme Butonu
        const addButton = document.createElement('button');
        addButton.innerText = 'Script Ekle';
        addButton.onclick = () => addCustomScript(scriptInput.value);
        panel.appendChild(addButton);

        // Sayfaya Paneli Ekleme
        document.body.appendChild(panel);
    }

    // Kullanıcı Tarafından Eklenen Scriptleri Çalıştırma
    function addCustomScript(scriptContent) {
        const script = document.createElement('script');
        script.textContent = scriptContent;
        document.head.appendChild(script);
    }


    // PyScript CDN Ekleme
    function addPyScriptCDN() {
        const pyScriptLink = document.createElement('script');
        pyScriptLink.src = 'https://pyscript.net/latest/pyscript.js';
        pyScriptLink.type = 'text/javascript';
        document.head.appendChild(pyScriptLink);
    }


    // CDN Butonları Ekleme
    function addCDNButtons() {
        const cdnList = [
            { name: 'jQuery', url: 'https://code.jquery.com/jquery-3.6.0.min.js' },
            { name: 'Bootstrap JS', url: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' },
            { name: 'Bootstrap CSS', url: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' },
            // Diğer CDN'ler eklenebilir
        ];

        cdnList.forEach(cdn => {
            const cdnButton = document.createElement('button');
            cdnButton.innerText = `Add ${cdn.name}`;
            cdnButton.style.marginRight = '5px';
            cdnButton.onclick = () => addCDN(cdn.url, cdn.name.includes('CSS') ? 'css' : 'js');
            document.body.appendChild(cdnButton);
        });
    }

    // CDN Linkini Sayfaya Ekleme
    function addCDN(url, type) {
        const element = document.createElement(type === 'css' ? 'link' : 'script');
        if (type === 'css') {
            element.rel = 'stylesheet';
            element.href = url;
        } else {
            element.src = url;
            element.type = 'text/javascript';
        }
        document.head.appendChild(element);
    }


    // Başlangıç Fonksiyonu
    function init() {
        addScriptManagerUI();
        addPyScriptCDN();
        addCDNButtons();
    }

    // Scriptin yüklenmesi tamamlandığında başlatılır
    window.addEventListener('load', init);
})();
