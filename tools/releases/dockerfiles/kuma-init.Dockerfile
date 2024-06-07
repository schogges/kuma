# until there is a distroless iptables image we have to use something else
FROM ubuntu:jammy-20240530@sha256:19478ce7fc2ffbce89df29fea5725a8d12e57de52eb9ea570890dc5852aac1ac
ARG ARCH

RUN apt-get update && \
    apt-get install --no-install-recommends -y iptables=1.8.7-1ubuntu5.2 iproute2=5.15.0-1ubuntu2 && \
    rm -rf /var/lib/apt/lists/*

COPY /build/artifacts-linux-$ARCH/kumactl/kumactl /usr/bin

# this will be from a base image once it is done
COPY /tools/releases/templates/LICENSE \
    /tools/releases/templates/README \
    /kuma/

COPY /tools/releases/templates/NOTICE /kuma/NOTICE

RUN adduser --system --disabled-password --group kumactl --uid 5678

ENTRYPOINT ["/usr/bin/kumactl"]
CMD ["install", "transparent-proxy"]
