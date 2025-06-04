const springBootQues = [
    {
        "id": 1,
        "question": "How are filters used in Spring Web?",
        "options": [
            "Filters are called before a request hits the DispatcherServlet. They allow for interception-style, chained processing of web requests for security, timeouts, and other purposes.",
            "Filters are used with a checksum algorithm that will filter invalid bytes out of a byte stream request body and allow for processing of HTTP requests from the DispatcherRequestServlet.",
            "Filters are used with a checksum algorithm that will filter invalid bytes out of an octet stream a multipart upload and allow for chained processing of WebDispatcherServlet requests.",
            "Filters are used to validate request parameters out of the byte stream request body and allow for processing of requests from the DispatcherRequestServlet."
        ],
        "roles": ["javadevelpoer", "javafullstack"],
        "type": "springboot",
        "answer": 0
    },
    {
        "id": 2,
        "question": "How is a resource defined in the context of a REST service?",
        "options": [
            "A resource is the actual String literal that composes a URI that is accessed on a RESTful web service.",
            "It is an abstract concept that represents a typed object, data, relationships, and a set of methods that operate on it that is accessed via a URI.",
            "A REST service has a pool of resources composed of allocations of memory that allow a request to be processed.",
            "A resource for a REST service is an explicit allocation of a thread or CPU cycles to allow a request to be processed."
        ],
        "roles": ["javadeveloper", "javafullstack"],
        "type": "springboot",
        "answer": 1
    },
    {
        "id": 3,
        "question": "Which of these is a valid Advice annotation?",
        "options": [
            "@AfterError",
            "@AfterReturning",
            "@AfterException",
            "@AfterExecution"
        ],
        "roles": ["javadevelpoer", "javafullstack"],
        "type": "springboot",
        "answer": 1
    },
    {
        "id": 4,
        "question": "What does a ViewResolver do?",
        "options": [
            "It supports internationalization of web applications by detecting a user's locale.",
            "It generates a view by mapping a logical view name returned by a controller method to a view technology.",
            "It creates a unique view determined by the user's browser type, supporting cross-browser compatibility.",
            "It maps custom parameters to SQL views in the database, allowing for dynamic content to be created in the response."
        ],
        "roles": ["javadeveloper", "javafullstack"],
        "type": "springboot",
        "answer": 1
    },
    {
        "id": 5,
        "question": "How are Spring Data repositories implemented by Spring at runtime?",
        "options": [
            "Spring automatically generated code for you based on your YAML config that defined a MethodInterceptor chain that intercept calls to the instance and computed SQL on the fly.",
            "A JDK proxy instance is created, which backs the repository interface, and a MethodInterceptor intercepts calls to the instance and routes as required.",
            "The Spring JDK proxy creates a separate runtime process that acts as an intermediary between the database and the Web server, and intercepts calls to the instance and handles requests.",
            "Spring automatically generated code for you based on your XML config files that define a SpringMethodAutoGeneration factory that intercepts calls to the instance and creates dynamic method that compute SQL on the fly."
        ],
        "roles": ["javadevelpoer", "javafullstack"],
        "type": "springboot",
        "answer": 1
    },
    {
        "id": 6,
        "question": "What is SpEL and how is it used in Spring?",
        "options": [
            "SpEL (Spring Expression Language) runs in the JVM and can act as a drop-in replacement for Groovy or other languages.",
            "SpEL (Spring Expression Language) supports boolean and relational operators and regular expressions, and is used for querying a graph of objects at runtime.",
            "SpEL (Spring Expression Language) allows you to build, configure, and execute tasks such as building artifacts and downloading object dependencies.",
            "SpEL (Spring Expression Language) natively transpiles one JVM language to another, allowing for greater flexibility."
        ],
        "roles": ["javadeveloper", "javafullstack"],
        "type": "springboot",
        "answer": 1
    },
    {
        "id": 7,
        "question": "The process of linking aspects with other objects to create an advised object is called",
        "options": [
            "dynamic chaining",
            "banding",
            "weaving",
            "interleaving"
        ],
        "roles": ["javadevelpoer", "javafullstack"],
        "type": "springboot",
        "answer": 2
    },
    {
        "id": 8,
        "question": "How are JDK Dynamic proxies and CGLIB proxies used in Spring?",
        "options": [
            "JDK Dynamic proxy can proxy only interfaces, so it is used if the target implements at least one interface. A CGLIB proxy can create a proxy by subclassing and is used if the target does not implement an interface.",
            "Only JDK Dynamic proxies are used in the Spring Bean Lifecycle. CGLIB proxies are used only for integrating with other frameworks.",
            "Only CGLIB proxies are used in the Spring Bean Lifecycle. JDK Dynamic proxies are used only for integrating with other frameworks.",
            "JDK Dynamic proxy can only using an abstract class extended by a target. A CGLIB proxy can create a proxy through bytecode interweaving and is used if the target does not extend an abstract class."
        ],
        "roles": ["javadeveloper", "javafullstack"],
        "type": "springboot",
        "answer": 0
    },
    {
        "id": 9,
        "question": "Which of these is not a valid method on the JoinPoint interface?",
        "options": [
            "getArgs()",
            "getExceptions()",
            "getSignature()",
            "getTarget()"
        ],
        "roles": ["javadevelpoer", "javafullstack"],
        "type": "springboot",
        "answer": 1
    },
    {
        "id": 10,
        "question": "In what order do the @PostConstruct annotated method, the init-method parameter method on beans and the afterPropertiesSet() method execute?",
        "options": [
            "1. afterPropertiesSet() 2. init-method 3. @PostConstruct",
            "1. @PostConstruct 2. afterPropertiesSet() 3. init-method",
            "1. init-method 2. afterPropertiesSet() 3. @PostConstruct",
            "You cannot use these methods together—you must choose only one."
        ],
        "roles": ["javadeveloper", "javafullstack"],
        "type": "springboot",
        "answer": 1
    },
    {
        "id": 11,
        "question": "What is the function of the `@Transactional` annotation at the class level?",
        "options": [
            "It's a transaction attribute configured by `spring.security.transactions.xml` config file that uses Spring's transaction implementation and validation code.",
            "It's a transaction that must actively validate by the bytecode of a transaction using Spring's `TransactionBytecodeValidator` class. Default Transaction behavior rolls back on validation exception but commits on proper validation",
            "It creates a proxy that implements the same interface(s) as the annotated class, allowing Spring to inject behaviors before, after, or around method calls into the object being proxied.",
            "It's a transaction that must be actively validated by Spring's `TransactionValidator` class using Spring's transaction validation code. Default Transaction behavior rolls back on validation exception."
        ],
        "roles": ["javadeveloper", "javafullstack"],
        "type": "springboot",
        "answer": 2
    },
    {
        "id": 12,
        "question": "Which is a valid example of the output from this code (ignoring logging statements)?",
        "options": [
            "Nothing will print",
            "startup\ninit",
            "init",
            "startup"
        ],
        "roles": ["javadevelpoer", "javafullstack"],
        "type": "springboot",
        "answer": 3
    },
    {
        "id": 13,
        "question": "Which println statement would you remove to stop this code throwing a null pointer exception?",
        "options": [
            "formatter.getClass()",
            "context.getClass()",
            "context.getBean(\"formatter\").getClass()",
            "context.containsBean(\"formatter\")"
        ],
        "roles": ["javadeveloper", "javafullstack"],
        "type": "springboot",
        "answer": 0
    },
    {
        "id": 14,
        "question": "What is the root interface for accessing a Spring bean container?",
        "options": [
            "SpringInitContainer",
            "ResourceLoader",
            "ApplicationEventPublisher",
            "BeanFactory"
        ],
        "roles": ["javadevelpoer", "javafullstack"],
        "type": "springboot",
        "answer": 3
    },
    {
        "id": 15,
        "question": "Which annotation can be used within Spring Security to apply method level security?",
        "options": [
            "@Secured",
            "@RequiresRole",
            "@RestrictedTo",
            "@SecurePath"
        ],
        "roles": ["javadevelpoer", "javafullstack"],
        "type": "springboot",
        "answer": 0
    },
    {
        "id": 16,
        "question": "What is the result of calling the map controller method using the HTTP request GET localhost:8080/map?foo=foo&bar=bar ?",
        "options": [
            "An InvalidParameterNameMappingException is thrown at runtime.",
            "barfoo",
            "foobar",
            "A status code of 400 Bad Request is returned."
        ],
        "roles": ["javadeveloper", "javafullstack"],
        "type": "springboot",
        "answer": 2
    },
    {
        "id": 17,
        "question": "Which of these scopes is NOT supported in the Spring Framework for beans?",
        "options": [
            "singleton",
            "prototype",
            "session",
            "thread-local"
        ],
        "roles": ["javadevelpoer", "javafullstack"],
        "type": "springboot",
        "answer": 3
    },
    {
        "id": 18,
        "question": "What is Spring Boot?",
        "options": [
            "A Spring Boot is a spring project with tools and frameworks for faster setup of new Spring applications, with defaults for many configuration options.",
            "Spring Boot is a standalone JAR that bundles all Spring dependencies, allowing easy deployment to cloud.",
            "Spring Boot is a plugin for Eclipse that provides auto code generation for Spring projects.",
            "Spring Boot is a web server embedded into the Spring Framework that replaces Tomcat and Jetty."
        ],
        "roles": ["javadeveloper", "javafullstack"],
        "type": "springboot",
        "answer": 0
    },
    {
        "id": 19,
        "question": "What is the default scope of a Spring bean?",
        "options": [
            "prototype",
            "singleton",
            "request",
            "session"
        ],
        "roles": ["javadevelpoer", "javafullstack"],
        "type": "springboot",
        "answer": 1
    },
    {
        "id": 20,
        "question": "What does the `@Autowired` annotation do?",
        "options": [
            "It marks a bean as eligible for auto-detection when using annotation-based configuration and classpath scanning.",
            "It allows Spring to automatically resolve and inject collaborating beans into your bean.",
            "It marks a class as a Spring managed bean to be instantiated at startup.",
            "It configures an XML file as the source of bean definitions for Spring."
        ],
        "roles": ["javadevelpoer", "javafullstack"],
        "type": "springboot",
        "answer": 1
    },
    {
        "id": 21,
        "question": "What is the purpose of the ApplicationContext interface?",
        "options": [
            "It is used for wiring beans in XML only.",
            "It extends BeanFactory to provide more enterprise-specific functionalities like event propagation, internationalization, and application-layer specific contexts.",
            "It is a helper interface to configure Spring Security.",
            "It manages database transactions."
        ],
        "roles": ["javadevelpoer", "javafullstack"],
        "type": "springboot",
        "answer": 1
    },
    {
        "id": 22,
        "question": "What is the role of the DispatcherServlet in Spring MVC?",
        "options": [
            "It acts as the front controller, intercepting requests and dispatching them to appropriate handlers/controllers.",
            "It manages database connections.",
            "It is responsible for rendering views only.",
            "It handles security authentication."
        ],
        "roles": ["javadevelpoer", "javafullstack"],
        "type": "springboot",
        "answer": 0
    },
    {
        "id": 23,
        "question": "What does the `@Component` annotation indicate in Spring?",
        "options": [
            "It defines a new annotation processor.",
            "It marks a class as a Spring component, making it eligible for component scanning and auto-detection.",
            "It marks a class as a configuration class.",
            "It declares a property source for configuration."
        ],
        "roles": ["javadevelpoer", "javafullstack"],
        "type": "springboot",
        "answer": 1
    },
    {
        "id": 24,
        "question": "What is Aspect-Oriented Programming (AOP) in Spring?",
        "options": [
            "A technique to write database queries.",
            "A way to modularize cross-cutting concerns such as logging, security, and transactions by separating them from business logic.",
            "A testing framework for Spring applications.",
            "A UI templating engine."
        ],
        "roles": ["javadevelpoer", "javafullstack"],
        "type": "springboot",
        "answer": 1
    },
    {
        "id": 25,
        "question": "Which annotation would you use to declare a REST controller in Spring?",
        "options": [
            "@Controller",
            "@RestController",
            "@RequestMapping",
            "@Service"
        ],
        "roles": ["javadevelpoer", "javafullstack"],
        "type": "springboot",
        "answer": 1
    },
    {
        "id": 26,
        "question": "What does the `@RequestMapping` annotation do?",
        "options": [
            "It maps HTTP requests to handler methods of MVC and REST controllers.",
            "It defines the database schema.",
            "It marks a class for auto-configuration.",
            "It schedules tasks."
        ],
        "roles": ["javadevelpoer", "javafullstack"],
        "type": "springboot",
        "answer": 0
    },
    {
        "id": 27,
        "question": "Which of the following is NOT a stereotype annotation in Spring?",
        "options": [
            "@Component",
            "@Repository",
            "@Configuration",
            "@Transactional"
        ],
        "roles": ["javadeveloper", "javafullstack"],
        "type": "springboot",
        "answer": 3
    },
    {
        "id": 28,
        "question": "What is the default behavior of `@Transactional` annotation when a runtime exception is thrown?",
        "options": [
            "Transaction is committed.",
            "Transaction is rolled back.",
            "Transaction behavior is undefined.",
            "Transaction is suspended."
        ],
        "roles": ["javadevelpoer", "javafullstack"],
        "type": "springboot",
        "answer": 1
    },
    {
        "id": 29,
        "question": "What is the role of the `HandlerInterceptor` interface in Spring MVC?",
        "options": [
            "To intercept requests before they reach the DispatcherServlet.",
            "To intercept requests after the controller has processed them but before rendering the view.",
            "To intercept database calls.",
            "To intercept requests for session management only."
        ],
        "roles": ["javadevelpoer", "javafullstack"],
        "type": "springboot",
        "answer": 1
    },
    {
        "id": 30,
        "question": "What is the difference between `@ComponentScan` and `<context:component-scan>`?",
        "options": [
            "`@ComponentScan` is Java annotation based, `<context:component-scan>` is XML based.",
            "Both are exactly the same and interchangeable.",
            "`@ComponentScan` is used only in Spring Boot.",
            "`<context:component-scan>` is used only for security."
        ],
        "roles": ["javadeveloper", "javafullstackr"],
        "type": "springboot",
        "answer": 0
    }
]


module.exports = springBootQues;