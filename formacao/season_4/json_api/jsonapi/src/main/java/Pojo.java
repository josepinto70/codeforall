

public class Pojo {



        private String ip;
        private String city;
        private String region;

        private String country;
        private String loc;
        private String org;
        private String postal;
        private String timezone;
        private String readme;

        public String getIp() {
            return ip;
        }

        public void setIp(String ip) {
            this.ip = ip;
        }

        public String getCity() {
            return city;
        }

        public void setCity(String city) {
            this.city = city;
        }

        public String getRegion() {
            return region;
        }

        public void setRegion(String region) {
            this.region = region;
        }

        public String getCountry() {
            return country;
        }

        public void setCountry(String country) {
            this.country = country;
        }

        public String getLoc() {
            return loc;
        }

        public void setLoc(String loc) {
            this.loc = loc;
        }

        public String getOrg() {
            return org;
        }

        public void setOrg(String org) {
            this.org = org;
        }

        public String getPostal() {
            return postal;
        }

        public void setPostal(String postal) {
            this.postal = postal;
        }

        public String getTimezone() {
            return timezone;
        }

        public void setTimezone(String timezone) {
            this.timezone = timezone;
        }

        public String getReadme() {
            return readme;
        }

        public void setReadme(String readme) {
            this.readme = readme;
        }

        // Getters and Setters




    @Override
    public String toString() {

        return "Pojo{" +
                "ip='" + ip + '\n' +
                ", city='" + city + '\n' +
                ", region='" + region + '\n' +
                ", country='" + country + '\n' +
                ", loc='" + loc + '\n' +
                ", org='" + org + '\n' +
                ", postal='" + postal + '\n' +
                ", timezone='" + timezone + '\n' +
                ", readme='" + readme + '\n' +
                '}';
    }


}



