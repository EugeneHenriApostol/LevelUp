# Stage 1: Base image for runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

# Stage 2: Build and restore dependencies
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["LevelUpAPI/LevelUpAPI.csproj", "LevelUpAPI/"]
RUN dotnet restore "./LevelUpAPI/LevelUpAPI.csproj"
COPY . .
WORKDIR "/src/LevelUpAPI"
RUN dotnet build "./LevelUpAPI.csproj" -c $BUILD_CONFIGURATION -o /app/build

# Stage 3: Publish for production
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./LevelUpAPI.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# Stage 4: Final image
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "LevelUpAPI.dll"]
