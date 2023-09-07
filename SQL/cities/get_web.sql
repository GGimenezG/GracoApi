CREATE PROCEDURE `cities_get_web`(
	IN iId INT
)
BEGIN

    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
        

	IF iId = 0 THEN
		SELECT c.idCities as id, c.fullname, c.shortname, c.Regions_idRegions as idRegion
		/*INTO @selectdata*/
		FROM cities c 
		WHERE c.status = 'A';
		SET oRes = 1;
		SET oMessage = 'Get data successfully';
	ELSE
		SELECT c.idCities as id, c.fullname, c.shortname, c.Regions_idRegions as idRegion
		/*INTO @selectdata*/
		FROM cities c 
		WHERE c.status = 'A' AND c.idCities = iId;
		SET oRes = 1;
		SET oMessage = 'Get data successfully';
	END IF;

	
    SELECT oRes as success, oMessage as message;
END