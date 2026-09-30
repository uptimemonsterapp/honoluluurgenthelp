// Honolulu Urgent Care Clinic — main.js
document.addEventListener('DOMContentLoaded', function () {

  // Mobile menu toggle
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });
  }

  // Mobile dropdown toggle
  document.querySelectorAll('.dropdown-toggle').forEach(function (el) {
    el.addEventListener('click', function (e) {
      if (window.innerWidth <= 820) {
        e.preventDefault();
        el.parentElement.classList.toggle('open');
      }
    });
  });

  // Accordion
  document.querySelectorAll('.accordion-header').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.parentElement;
      var body = item.querySelector('.accordion-body');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item.open').forEach(function (o) {
        o.classList.remove('open');
        o.querySelector('.accordion-body').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // Header shadow on scroll
  var header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 10
        ? '0 4px 20px rgba(20,48,77,.14)'
        : '0 2px 14px rgba(20,48,77,.08)';
    });
  }

  // Contact form -> mailto
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#cf-name').value;
      var email = form.querySelector('#cf-email').value;
      var phone = form.querySelector('#cf-phone').value;
      var service = form.querySelector('#cf-service').value;
      var msg = form.querySelector('#cf-message').value;
      var subject = encodeURIComponent('Website Inquiry: ' + service + ' — ' + name);
      var bodyTxt = encodeURIComponent(
        'Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone +
        '\nService Needed: ' + service + '\n\nMessage:\n' + msg
      );
      window.location.href = 'mailto:Hello@niuhealth.com?subject=' + subject + '&body=' + bodyTxt;
      var note = document.getElementById('formNote');
      if (note) note.style.display = 'block';
    });
  }
});
