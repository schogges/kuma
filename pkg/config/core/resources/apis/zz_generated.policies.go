// Generated by tools/policy-gen
// Run "make generate" to update this file.

package apis

var DefaultEnabled = []string{
	"meshservices",
}

func Default() *Config {
	return &Config{
		Enabled: DefaultEnabled,
	}
}
