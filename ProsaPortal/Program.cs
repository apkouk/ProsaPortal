using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;
using Azure.Extensions.AspNetCore.Configuration.Secrets;

namespace ProsaPortal
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args).ConfigureAppConfiguration((context, config) =>
            {
               

                //var keyVaultEndpoint = new Uri(Environment.GetEnvironmentVariable("AzValut"));
                //config.AddAzureKeyVault(keyVaultEndpoint, new DefaultAzureCredential());


                //var secretClient = new SecretClient(new Uri(Environment.GetEnvironmentVariable("VaultUri")), new DefaultAzureCredential());
                //config.AddAzureKeyVault(secretClient, new KeyVaultSecretManager());


            }).ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
