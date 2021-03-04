// Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse); 
using Newtonsoft.Json;
using System.Collections.Generic;

public class Intro
{
    public List<string> paragraphs { get; set; }
    public string optionMenu { get; set; }
    public string wellcome { get; set; }
    public string btnWellcome { get; set; }
}

public class TechSkills
{
    public List<string> paragraphs { get; set; }
    public string devSkills { get; set; }
    public string concepts { get; set; }
    public string tools { get; set; }
    public string optionMenu { get; set; }
    public string subTitle1 { get; set; }
    public string subTitle2 { get; set; }
    public string subTitle3 { get; set; }
}

public class PersonalSkills
{
    public List<string> paragraphs { get; set; }
    public string optionMenu { get; set; }
}

public class ExperienceItem
{
    public int id { get; set; }
    public string tag { get; set; }
    public string company { get; set; }
    public string website { get; set; }
    public string city { get; set; }
    public string role { get; set; }
    public string dateStart { get; set; }
    public string dateEnd { get; set; }
    public string techStack { get; set; }
    public string description { get; set; }
    public object tasks { get; set; }
    public string image { get; set; }
    public List<string> project { get; set; }
}

public class Experiences
{
    public string optionMenu { get; set; }
    [JsonProperty("experience-items")]
    public List<ExperienceItem> ExperienceItems { get; set; }
}

public class EducationItem
{
    public int id { get; set; }
    public string center { get; set; }
    public string date { get; set; }
    public string title { get; set; }
    public string desc { get; set; }
    public string descUrl { get; set; }
    public string image { get; set; }
    public string url { get; set; }
}

public class Education
{
    public string optionMenu { get; set; }
    [JsonProperty("education-items")]
    public List<EducationItem> EducationItems { get; set; }
}

public class Book
{
    public int id { get; set; }
    public string title { get; set; }
    public string author { get; set; }
}

public class Conference
{
    public int id { get; set; }
    public string name { get; set; }
    public string desc { get; set; }
    public string date { get; set; }
    public string URL { get; set; }
}

public class Misc
{
    public string optionMenu { get; set; }
    public string optionMenu2 { get; set; }
    public List<Book> books { get; set; }
    public List<Conference> conferences { get; set; }
}

public class Link
{
    public int id { get; set; }
    public string name { get; set; }
    public string URL { get; set; }
    public string image { get; set; }
}

public class SocialMedia
{
    public string optionMenu { get; set; }
    public List<Link> links { get; set; }
}

public class ServiceItem
{
    public int id { get; set; }
    public string title { get; set; }
    public string desc { get; set; }
    public string image { get; set; }
}

public class Services
{
    public string optionMenu { get; set; }
    public string title { get; set; }
    public List<ServiceItem> serviceItems { get; set; }
}

public class Cv
{
    public Intro intro { get; set; }
    public TechSkills techSkills { get; set; }
    public PersonalSkills personalSkills { get; set; }
    public Experiences experiences { get; set; }
    public Education education { get; set; }
    public Misc misc { get; set; }
    public SocialMedia socialMedia { get; set; }
    public Services services { get; set; }
}

public class CosmoDbDocument
{
    public string id { get; set; }
    public string lang { get; set; }
    public Cv content { get; set; }
}

