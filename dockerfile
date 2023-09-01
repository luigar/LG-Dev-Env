FROM node:18

#Variables
ENV LG_WEBOS_TV_SDK_HOME="/opt/webOS_TV_SDK"
ENV WEBOS_CLI_TV="$LG_WEBOS_TV_SDK_HOME/CLI/bin"
ENV PATH="$PATH:$WEBOS_CLI_TV"


# Install basic development tools
RUN apt update && apt install -y less man-db sudo

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true

# Prepare Env
COPY /webOS_TV_SDK /opt/webOS_TV_SDK
COPY /lg-project /lg-project

WORKDIR /lg-project