// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using Microsoft.AspNetCore.SignalR;

namespace JabbR.Core;

public class JabbRHub: Hub<IJabbRHub> {

    public override async Task OnConnectedAsync()
    {

    }

    public override async Task OnDisconnectedAsync(Exception? exception)
    {

    }

    public async Task AddToGroup(string groupName)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
    }

    public async Task RemoveFromGroup(string groupName)
    {
        await Groups.RemoveFromGroupAsync(Context.ConnectionId, groupName);
    }
}

