# Installing

Follow these steps to install IBM Bob. The setup takes about five minutes.

## System requirements

<CardGrid :cols="2">
  <Card title="Operating Systems" description="macOS, Linux, or Windows"/>
  <Card title="Memory" description="Minimum 4 GB RAM (8 GB recommended)"/>
  <Card title="Storage" description="At least 500 MB available disk space"/>
  <Card title="Network" description="Active internet connection"/>
</CardGrid>

## Download IBM Bob

<Card
  title="Get the installer"
  description="Choose the correct version for your operating system."
  href="https://bob.ibm.com/download"
  icon=""
/>

::::tabs
=== Windows
1. Download the .exe installer for Windows.
1. Run the downloaded .exe installer.
1. Follow the installation wizard prompts.
1. Choose your installation directory (default is recommended).
1. Click Finish to complete the installation.
=== MacOS
::: tip
To determine if you should choose the mac ARM or mac Intel installer:

1. Click the Apple logo in the top left of the navigation menu.
1. Click About This Mac and check the Chip information. For Apple M1, M2, M3, etc., choose mac-ARM. For Intel, choose mac-Intel.
:::
1. Download, then open the .pkg file for macOS.
1. Complete the steps in the installation wizard.
=== Linux
::: tabs
== Debian
1. Download the .deb file from the download page.
1. Install with your package manager, or run the following command:
    ```
    sudo apt install ./IBM-Bob-linux-amd64-1.105.1+bob1.0.0.deb
    ```
== Red Hat
1. Download the .rpm file from the download page.
1. Install with your package manager, or run the following command:
    ```
    sudo dnf install ./IBM-Bob-linux-x64-1.105.1+bob1.0.0.rpm
    ```
:::
::::

## Sign in with your IBMid

> [!NOTE]
> An IBMid is required to authenticate. If you do not have one, see [Create an IBMid](https://www.ibm.com/account/reg/us-en/signup?formid=urx-19776).

Open Bob from your applications menu or desktop shortcut. On first launch, Bob will prompt you to sign in:

1. Follow the authentication flow with your browser to login with your IBMid.
2. Return to Bob after authentication is complete.
