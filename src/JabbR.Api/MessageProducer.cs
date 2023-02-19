// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using JabbR.Core;
using JabbR.Core.Messages;
using Microsoft.AspNetCore.SignalR;
using System.Text.Json;

namespace JabbR.Api;

public class MessageProducer: BackgroundService
{
    private readonly ILogger<MessageProducer> _logger;
    private readonly IHubContext<JabbRHub, IJabbRHub> _hubContext;

    public MessageProducer(ILogger<MessageProducer> logger, IHubContext<JabbRHub, IJabbRHub> hubContext)
    {
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        _hubContext = hubContext ?? throw new ArgumentNullException(nameof(hubContext));
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);

            await _hubContext.Clients.Group("Home").Message(JsonSerializer.Serialize(new Home()));

            await _hubContext.Clients.Group("Tech").Message(JsonSerializer.Serialize(new Tech()));

            await Task.Delay(1000, stoppingToken);
        }

    }

}


