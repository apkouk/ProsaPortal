﻿using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using ProsaPortal.Models;
using ProsaPortal.Services;
using System.Text.Json;

using System.Net.Http;
using System.Text;

namespace ProsaPortal.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ICosmosDbService _cosmosDbService;
        public HomeController(ILogger<HomeController> logger, ICosmosDbService cosmosDbService)
        {
            _cosmosDbService = cosmosDbService;
            _logger = logger;
        }

        public async Task<IActionResult> IndexAsync()
        {    
            Item item = await _cosmosDbService.GetAsync("SELECT * FROM c where c.lang='en'");
            var cosmoDbDocument = await _cosmosDbService.GetDocument("SELECT * FROM c where c.id='" + item.Id + "'");
                
            ViewData["content"] = cosmoDbDocument;
            return View();         
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
