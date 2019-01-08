package runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features={"/Users/shahnazpervin/Desktop/Tahsan/eBayBDD/eBayCucumber/src/test/java/feature/Register.feature"},
        glue={"stepDefinitions"},
        format = {"pretty","json:report/cucumber.json","html:report/cucumber-prety"},
        strict=false,
        monochrome=true,
        tags={"@FunctoinalTest"},
        dryRun=false
)


public class RunnerTest {
}
