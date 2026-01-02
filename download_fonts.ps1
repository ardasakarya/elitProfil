$ErrorActionPreference = "Stop"

$fontDir = "frontend/fonts"
if (-not (Test-Path -Path $fontDir)) {
    New-Item -ItemType Directory -Path $fontDir | Out-Null
    Write-Host "Created directory: $fontDir"
}

$fonts = @(
    @{ Url = "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuOKfMZg.ttf"; File = "Inter-Light.ttf" },
    @{ Url = "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf"; File = "Inter-Regular.ttf" },
    @{ Url = "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZg.ttf"; File = "Inter-Medium.ttf" },
    @{ Url = "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZg.ttf"; File = "Inter-SemiBold.ttf" },
    @{ Url = "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZg.ttf"; File = "Inter-Bold.ttf" },
    @{ Url = "https://fonts.gstatic.com/s/pacifico/v23/FwZY7-Qmy14u9lezJ96A.ttf"; File = "Pacifico-Regular.ttf" }
)

foreach ($font in $fonts) {
    $outputPath = Join-Path -Path $fontDir -ChildPath $font.File
    Write-Host "Downloading $($font.File)..."
    try {
        Invoke-WebRequest -Uri $font.Url -OutFile $outputPath
    }
    catch {
        Write-Error "Failed to download $($font.File): $_"
    }
}

Write-Host "All fonts downloaded successfully!"
