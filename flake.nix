## NOTE: need to update system config with the following
## (this isn't great, so if you know how to reproducably put it
## here, plz let me know thx)
# programs.nix-ld.enable = true;
# programs.nix-ld.libraries = with pkgs; [
#   stdenv.cc.cc
#   zlib
#   fuse3
#   icu
#   nss
#   openssl
#   curl
#   expat
# ];

{
  description = "A Nix-flake-based Node.js dev environment for colclark.net";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.05";
  };

  outputs = { self, nixpkgs, ... }: let
    system = "x86_64-linux";
  in {
    devShells."${system}".default = let
      pkgs = import nixpkgs { inherit system; };
    in pkgs.mkShell {
      packages = with pkgs; [
        nodejs_24
        nodePackages.pnpm
        wrangler
      ];

      shellHook = ''
        echo "node `node --version`"
        echo "pnpm `pnpm --version`"
      '';
    };
  };
}