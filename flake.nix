{
  description = "A Nix-flake-based Node.js dev environment for colclark.net";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-26.05";
  };

  outputs = { self, nixpkgs, ... }:
    let
      systems = [ "x86_64-linux" "aarch64-darwin" ];
      forAllSystems = f:
        nixpkgs.lib.genAttrs systems (system:
          f (import nixpkgs { inherit system; }));
    in {
      devShells = forAllSystems (pkgs: {
        default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_24
            pnpm
          ];

          shellHook = ''
            echo "node $(node --version)"
            echo "pnpm $(pnpm --version)"
          '';
        };
      });
    };
}
