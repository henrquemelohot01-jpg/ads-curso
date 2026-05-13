/**
 * PROTEÇÃO ANTI-CÓPIA — ADS Master Pro
 * Bloqueia: copiar, colar, arrastar, clique direito, print screen,
 * atalhos de teclado (Ctrl+U, Ctrl+S, Ctrl+Shift+I, F12, etc.)
 * e DevTools.
 */
(function(){
  'use strict';

  // 1. Bloquear clique direito
  document.addEventListener('contextmenu', function(e){
    e.preventDefault();
    return false;
  });

  // 2. Bloquear seleção de texto (arrastar mouse)
  document.addEventListener('selectstart', function(e){
    // Permite em inputs e textareas
    if(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return true;
    e.preventDefault();
    return false;
  });

  // 3. Bloquear arrastar elementos
  document.addEventListener('dragstart', function(e){
    e.preventDefault();
    return false;
  });

  // 4. Bloquear copiar
  document.addEventListener('copy', function(e){
    // Permite em inputs e textareas
    if(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return true;
    e.preventDefault();
    return false;
  });

  // 5. Bloquear cortar
  document.addEventListener('cut', function(e){
    if(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return true;
    e.preventDefault();
    return false;
  });

  // 6. Bloquear atalhos perigosos
  document.addEventListener('keydown', function(e){
    // F12 — DevTools
    if(e.key === 'F12'){
      e.preventDefault();
      return false;
    }

    // Ctrl+Shift+I — Inspecionar
    if(e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')){
      e.preventDefault();
      return false;
    }

    // Ctrl+Shift+J — Console
    if(e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')){
      e.preventDefault();
      return false;
    }

    // Ctrl+Shift+C — Seletor de elementos
    if(e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')){
      e.preventDefault();
      return false;
    }

    // Ctrl+U — Ver código fonte
    if(e.ctrlKey && (e.key === 'U' || e.key === 'u')){
      e.preventDefault();
      return false;
    }

    // Ctrl+S — Salvar página
    if(e.ctrlKey && (e.key === 'S' || e.key === 's')){
      e.preventDefault();
      return false;
    }

    // Ctrl+A — Selecionar tudo (fora de inputs)
    if(e.ctrlKey && (e.key === 'A' || e.key === 'a')){
      if(e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA'){
        e.preventDefault();
        return false;
      }
    }

    // Ctrl+C — Copiar (fora de inputs)
    if(e.ctrlKey && (e.key === 'C' || e.key === 'c')){
      if(e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA'){
        e.preventDefault();
        return false;
      }
    }

    // Ctrl+P — Imprimir
    if(e.ctrlKey && (e.key === 'P' || e.key === 'p')){
      e.preventDefault();
      return false;
    }

    // PrintScreen
    if(e.key === 'PrintScreen'){
      e.preventDefault();
      return false;
    }
  });

  // 7. Detectar DevTools aberto (tamanho da janela)
  var devToolsOpen = false;
  var threshold = 160;
  setInterval(function(){
    var w = window.outerWidth - window.innerWidth > threshold;
    var h = window.outerHeight - window.innerHeight > threshold;
    if(w || h){
      if(!devToolsOpen){
        devToolsOpen = true;
        document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#0a0a0a;color:#ff5252;font-family:Inter,sans-serif;text-align:center;padding:40px;"><div><h1 style="font-size:2rem;margin-bottom:16px;">⛔ Acesso Bloqueado</h1><p style="color:#888;font-size:1.1rem;">Ferramentas de desenvolvedor detectadas.<br>Feche o DevTools e recarregue a página.</p></div></div>';
      }
    } else {
      devToolsOpen = false;
    }
  }, 1000);

  // 8. Bloquear arrastar imagens
  document.addEventListener('DOMContentLoaded', function(){
    var imgs = document.querySelectorAll('img');
    imgs.forEach(function(img){
      img.setAttribute('draggable', 'false');
      img.addEventListener('contextmenu', function(e){ e.preventDefault(); });
    });
  });

  // 9. Desabilitar console.log em produção
  if(window.location.protocol !== 'file:'){
    console.log = function(){};
    console.warn = function(){};
    console.error = function(){};
    console.info = function(){};
    console.debug = function(){};
  }

})();
