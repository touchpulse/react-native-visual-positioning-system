const path = require("path");
const escape = require("escape-string-regexp");
const { getDefaultConfig } = require("@expo/metro-config");
const exclusionList = require("metro-config/src/defaults/exclusionList");

// Find the project root and the module to test
const projectRoot = __dirname;
const moduleRoot = path.resolve(
  projectRoot,
  "../react-native-visual-positioning-system"
);

const pak = require(path.join(moduleRoot, "package.json"));
const peerDependencies = Object.keys(pak.peerDependencies);

const config = getDefaultConfig(projectRoot);

// 1. Watch all files in the module
config.watchFolders = [moduleRoot];

// 2. Let Metro know where to resolve the module and its peer dependencies
config.resolver.extraNodeModules = {
  ...peerDependencies.reduce((acc, name) => {
    acc[name] = path.join(projectRoot, "node_modules", name);
    return acc;
  }, {}),
  [pak.name]: moduleRoot,
};

// 3. Let Metro know where to resolve the dependencies from
config.resolver.nodeModulesPaths = [path.resolve(projectRoot, "node_modules")];

// 4. Block the module's peer dependencies from being resolved from the module's node_modules
config.resolver.blockList = exclusionList(
  peerDependencies.map(
    (m) =>
      new RegExp(`^${escape(path.join(moduleRoot, "node_modules", m))}\\/.*$`)
  )
);

module.exports = config;
